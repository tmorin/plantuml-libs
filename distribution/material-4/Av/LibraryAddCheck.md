# LibraryAddCheck


```text
material-4/Av/LibraryAddCheck
```

```text
include('material-4/Av/LibraryAddCheck')
```



| Illustration | LibraryAddCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/LibraryAddCheck.png) | ![illustration for LibraryAddCheck](../../material-4/Av/LibraryAddCheck.Local.png) |




## LibraryAddCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LibraryAddCheck
include('material-4/Av/LibraryAddCheck')

' renders the element
LibraryAddCheck('LibraryAddCheck', 'Library Add Check', 'an optional tech label')
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

' loads the Item which embeds the element LibraryAddCheck
include('material-4/Av/LibraryAddCheck')

' renders the element
LibraryAddCheck('LibraryAddCheck', 'Library Add Check', 'an optional tech label')
@enduml
```

