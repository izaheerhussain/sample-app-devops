variable "resource_group_name" {
  default = "azure-cicd"
}

variable "location" {
  default = "eastus"
}

variable "aks_name" {
  default = "aks-devops-cluster"
}

variable "node_count" {
  default = 1
}

variable "node_size" {
  default = "Standard_DS2_v2"
}

variable "acr_name" {
  default = "azurecicdpoc"
}
