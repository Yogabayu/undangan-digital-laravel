<template>
  <div>
    <VCard class="auth-card pa-4 pt-5">
      <VCardItem class="align-left">
        <VCardTitle class="text-2xl font-weight-bold">
          Daftar Jabatan
        </VCardTitle>
      </VCardItem>
      <div class="d-flex justify-space-between mb-6">
        <v-btn
          color="primary"
          size="small"
          class="my-3 mx-3"
          @click="openModal(1)"
        >
          Tambah Data
        </v-btn>

        <div class="d-flex align-center pe-2 w-25">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            single-line
            flat
            hide-details
            variant="solo-filled"
            v-model="searchValue"
          ></v-text-field>
        </div>
      </div>
      <v-dialog v-model="insert" width="auto">
        <v-card>
          <template v-slot:title> Tambah Data </template>
          <template v-slot:text>
            <VForm @submit.prevent="insertData">
              <VRow>
                <VCol md="12" cols="12">
                  <VTextField
                    placeholder="Nama Jabatan"
                    label="Nama"
                    v-model="dataForm.name"
                    autofocus
                    :rules="[rules.required]"
                    prepend-icon="mdi-file"
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <v-select
                    label="Approval Draft"
                    :items="approvalLevels"
                    v-model="dataForm.approval_level_id"
                    :rules="[rules.required]"
                    prepend-icon="mdi-divide"
                  ></v-select>
                </VCol>
                <!-- <VCol md="12" cols="12">
                  <v-select
                    label="Level Jabatan?"
                    :items="[
                      { value: 4, title: 'Level 4' },
                      { value: 3, title: 'Level 3' },
                      { value: 2, title: 'Level 2' },
                      { value: 1, title: 'Level 1' },
                      { value: 0, title: 'Level 0' },
                    ]"
                    v-model="dataForm.level"
                    prepend-icon="mdi-help-rhombus"
                  ></v-select>
                </VCol> -->
                <VCol cols="12" class="d-flex flex-wrap gap-4">
                  <VBtn type="submit">Simpan</VBtn>

                  <button
                    type="button"
                    class="btn btn-blue"
                    @click="closeModal(1)"
                  >
                    Batal
                  </button>
                </VCol>
              </VRow>
            </VForm>
          </template>
        </v-card>
      </v-dialog>
      <v-dialog v-model="edit" width="auto">
        <v-card>
          <template v-slot:title> Update Data </template>
          <template v-slot:text>
            <VForm @submit.prevent="updateData">
              <VRow>
                <VCol md="12" cols="12">
                  <VTextField
                    placeholder="Nama Jabatan"
                    label="Nama"
                    v-model="dataForm.name"
                    autofocus
                    :rules="[rules.required]"
                    prepend-icon="mdi-file"
                  />
                </VCol>
                <VCol cols="12" md="12">
                  <v-select
                    label="Approval Draft"
                    :items="approvalLevels"
                    v-model="dataForm.approval_level_id"
                    :rules="[rules.required]"
                    prepend-icon="mdi-divide"
                  ></v-select>
                </VCol>
                <!-- <VCol md="12" cols="12">
                  <v-select
                    label="Bisa Upload Draft?"
                    :items="[
                      { value: 4, title: 'Level 4' },
                      { value: 3, title: 'Level 3' },
                      { value: 2, title: 'Level 2' },
                      { value: 1, title: 'Level 1' },
                      { value: 0, title: 'Level 0' },
                    ]"
                    v-model="dataForm.level"
                    prepend-icon="mdi-help-rhombus"
                  ></v-select>
                </VCol> -->
                <VCol cols="12" class="d-flex flex-wrap gap-4">
                  <VBtn type="submit">Simpan</VBtn>

                  <button
                    type="button"
                    class="btn btn-blue"
                    @click="closeModal(2)"
                  >
                    Batal
                  </button>
                </VCol>
              </VRow>
            </VForm>
          </template>
        </v-card>
      </v-dialog>
      <EasyDataTable
        show-index
        :headers="headers"
        :items="items"
        :search-value="searchValue"
      >
        <template #empty-message>
          <p>Data Jabatan Kosong</p>
        </template>
        <template #loading>
          <p>loading data .....</p>
        </template>
        <template #item-approval_level="{ approval_level }">
          <VChip v-if="approval_level!=null"
          >
            {{ approval_level.name }}: {{ approval_level.desc }}
          </VChip>
          <VChip v-else>-</VChip>
        </template>
        <template #item-operation="item">
          <div class="operation-wrapper">
            <button>
              <VIcon
                size="20"
                icon="bx-edit"
                color="blue"
                @click="openModal(2, item)"
              />
            </button>
            &nbsp;
            <button>
              <VIcon
                size="20"
                icon="bx-trash"
                color="red"
                @click="deletePosition(item)"
              />
            </button>
          </div>
        </template>
      </EasyDataTable>
    </VCard>
  </div>
</template>

<script lang="ts">
import mainURL from "@/axios";
import { VChip } from "vuetify/lib/components/index.mjs";
export default {
  data() {
    return {
      rules: {
        required: (value: any) => !!value || "Required",
      },
      dataForm: {
        id: null,
        name: "",
        approval_level_id: null,
      },
      items: [],
      headers: [
        { text: "Nama Jabatan", value: "name", sortable: true },
        { text: "Total Karyawan", value: "users_count", sortable: true },
        { text: "Approval Draft", value: "approval_level", sortable: true },
        { text: "Operation", value: "operation" },
      ],
      searchValue: "",
      insert: false,
      edit: false,
      approvalLevels:[],
    };
  },
  methods: {
    getChipColor(level) {
      switch (level) {
        case 0:
          console.log("Level 0");
          return "rgb(255, 153, 0)";
        case 1:
          console.log("Level 1");
          return "rgb(229, 43, 43)";
        case 2:
          console.log("Level 2");
          return "rgb(6, 84, 107)";
        case 3:
          console.log("Level 3");
          return "rgb(150, 150, 150)"; // Warna abu-abu untuk level 3
        case 4:
          console.log("Level 4");
          return "rgb(0, 0, 0)"; // Warna hitam untuk level 4
        default:
          console.log("Level default");
          return "rgb(6, 84, 107)"; // Warna default untuk level yang tidak valid
      }
    },
    async deletePosition(item: { id: any }) {
      try {
        const confirmDelete = window.confirm(
          "Apakah Anda yakin ingin menghapus data?"
        );
        if (!confirmDelete) return;

        const response = await mainURL.delete(`/position/${item.id}`);

        if (response.status === 200) {
          this.getAllPositions();
          this.$showToast("success", "Berhasil", response.data.message);
        } else {
          this.$showToast("error", "Sorry", response.data.message);
        }
      } catch (error) {
        this.$showToast("error", "Sorry", error.response.data.message);
      }
    },
    async updateData() {
      try {
        const formData = new FormData();
        formData.append("name", this.dataForm.name);
        formData.append("approval_level_id", this.dataForm.approval_level_id);
        formData.append("_method", "PUT");

        const response = await mainURL.post(
          `/position/${this.dataForm.id}`,
          formData
        );
        if (response.status === 200) {
          this.closeModal(2);
          this.getAllPositions();
          this.$showToast("success", "Success", response.data.message);
        } else {
          this.$showToast("error", "Sorry", response.data.message);
        }
      } catch (error) {
        this.$showToast("error", "Sorry", error.response.data.message);
      }
    },
    async insertData() {
      try {
        for (let key in this.dataForm) {
          if (key !== "id") {
            if (this.dataForm[key] === null) {
              this.closeModal(1);
              this.$showToast("error", "Sorry", `Properti ${key} harus diisi.`);
            }
          }
        }

        const formData = new FormData();
        formData.append("approval_level_id", this.dataForm.approval_level_id);
        formData.append("name", this.dataForm.name);
        formData.append("_method", "POST");

        const response = await mainURL.post("/position", formData);
        if (response.status === 200) {
          this.closeModal(1);
          this.getAllPositions();
          this.$showToast("success", "Success", response.data.message);
        } else {
          this.$showToast("error", "Sorry", response.data.message);
        }
      } catch (error) {
        this.$showToast("error", "Sorry", error.response.data.message);
      }
    },
    closeModal(type: number) {
      if (type === 1) {
        this.resetForm();
        this.insert = false;
      } else if (type === 2) {
        this.resetForm();
        this.edit = false;
      }
    },
    resetForm() {
      this.dataForm = {
        name: "",
        id: null,
        approval_level_id: 1,
      };
    },
    openModal(type: number, item = null) {
      if (type === 1) {
        this.insert = true;
        this.getApprovalLevel();
      } else if (type === 2) {
        if (item) {
          this.dataForm.approval_level_id = parseInt(item.approval_level_id) ? parseInt(item.approval_level_id) : 1;
          this.dataForm.name = item.name;
          this.dataForm.id = item.id;
          this.edit = true;
        }
        this.getApprovalLevel();
      }
    },
    async getAllPositions() {
      try {
        const response = await mainURL.get("/position");

        if (response.status === 200) {
          this.items = response.data.data;
        } else {
          this.$showToast("error", "Sorry", response.data.data.message);
        }
      } catch (error) {
        this.$showToast("error", "Sorry", error.data.data.message);
      }
    },
    async getApprovalLevel(){
      try {
        const response = await mainURL.get("/draft-approval-level");

        if (response.status === 200) {
          this.approvalLevels = response.data.data.map(
            (item: { id: any; name: any ; desc:any}) => ({
              value: item.id,
              title: item.name +'-'+item.desc,
            })
          );
          
        } else {
          this.$showToast("error", "Sorry", response.data.data.message);
        }
      } catch (error) {
        this.$showToast("error", "Sorry", error.data.data.message);
      }
    }
  },
  mounted() {
    this.getAllPositions();
  },
};
</script>
