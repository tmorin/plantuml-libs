# LocalPostOffice


```text
material/Maps/LocalPostOffice
```

```text
include('material/Maps/LocalPostOffice')
```



| Illustration | LocalPostOffice |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalPostOffice.png) | ![illustration for LocalPostOffice](../../material/Maps/LocalPostOffice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPostOfficeXs>`
- `<$LocalPostOfficeSm>`
- `<$LocalPostOfficeMd>`
- `<$LocalPostOfficeLg>`





## LocalPostOffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalPostOffice
include('material/Maps/LocalPostOffice')

' renders the element
LocalPostOffice('LocalPostOffice', 'Local Post Office', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalPostOffice
include('material/Maps/LocalPostOffice')

' renders the element
LocalPostOffice('LocalPostOffice', 'Local Post Office', 'an optional tech label', 'an optional description')
@enduml
```

