# VenmoV


```text
fontawesome/Brands/VenmoV
```

```text
include('fontawesome/Brands/VenmoV')
```



| Illustration | VenmoV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/VenmoV.png) | ![illustration for VenmoV](../../fontawesome/Brands/VenmoV.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VenmoVXs>`
- `<$VenmoVSm>`
- `<$VenmoVMd>`
- `<$VenmoVLg>`





## VenmoV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VenmoV
include('fontawesome/Brands/VenmoV')

' renders the element
VenmoV('VenmoV', 'Venmo V', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VenmoV
include('fontawesome/Brands/VenmoV')

' renders the element
VenmoV('VenmoV', 'Venmo V', 'an optional tech label', 'an optional description')
@enduml
```

