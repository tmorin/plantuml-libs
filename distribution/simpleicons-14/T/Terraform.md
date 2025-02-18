# Terraform


```text
simpleicons-14/T/Terraform
```

```text
include('simpleicons-14/T/Terraform')
```



| Illustration | Terraform |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Terraform.png) | ![illustration for Terraform](../../simpleicons-14/T/Terraform.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TerraformXs>`
- `<$TerraformSm>`
- `<$TerraformMd>`
- `<$TerraformLg>`





## Terraform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Terraform
include('simpleicons-14/T/Terraform')

' renders the element
Terraform('Terraform', 'Terraform', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Terraform
include('simpleicons-14/T/Terraform')

' renders the element
Terraform('Terraform', 'Terraform', 'an optional tech label', 'an optional description')
@enduml
```

