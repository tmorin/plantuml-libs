# LocalOffer


```text
material-4/Maps/LocalOffer
```

```text
include('material-4/Maps/LocalOffer')
```



| Illustration | LocalOffer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalOffer.png) | ![illustration for LocalOffer](../../material-4/Maps/LocalOffer.Local.png) |




## LocalOffer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalOffer
include('material-4/Maps/LocalOffer')

' renders the element
LocalOffer('LocalOffer', 'Local Offer', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LocalOffer
include('material-4/Maps/LocalOffer')

' renders the element
LocalOffer('LocalOffer', 'Local Offer', 'an optional tech label', 'an optional description')
@enduml
```

