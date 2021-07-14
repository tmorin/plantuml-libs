# Filezilla


```text
simpleicons-5/F/Filezilla
```

```text
include('simpleicons-5/F/Filezilla')
```



| Illustration | Filezilla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Filezilla.png) | ![illustration for Filezilla](../../simpleicons-5/F/Filezilla.Local.png) |




## Filezilla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Filezilla
include('simpleicons-5/F/Filezilla')

' renders the element
Filezilla('Filezilla', 'Filezilla', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Filezilla
include('simpleicons-5/F/Filezilla')

' renders the element
Filezilla('Filezilla', 'Filezilla', 'an optional tech label')
@enduml
```

