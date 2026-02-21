# LocalPharmacy


```text
material/Maps/LocalPharmacy
```

```text
include('material/Maps/LocalPharmacy')
```



| Illustration | LocalPharmacy |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalPharmacy.png) | ![illustration for LocalPharmacy](../../material/Maps/LocalPharmacy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPharmacyXs>`
- `<$LocalPharmacySm>`
- `<$LocalPharmacyMd>`
- `<$LocalPharmacyLg>`





## LocalPharmacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalPharmacy
include('material/Maps/LocalPharmacy')

' renders the element
LocalPharmacy('LocalPharmacy', 'Local Pharmacy', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LocalPharmacy
include('material/Maps/LocalPharmacy')

' renders the element
LocalPharmacy('LocalPharmacy', 'Local Pharmacy', 'an optional tech label', 'an optional description')
@enduml
```

