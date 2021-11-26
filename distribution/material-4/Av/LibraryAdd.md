# LibraryAdd


```text
material-4/Av/LibraryAdd
```

```text
include('material-4/Av/LibraryAdd')
```



| Illustration | LibraryAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/LibraryAdd.png) | ![illustration for LibraryAdd](../../material-4/Av/LibraryAdd.Local.png) |




## LibraryAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LibraryAdd
include('material-4/Av/LibraryAdd')

' renders the element
LibraryAdd('LibraryAdd', 'Library Add', 'an optional tech label')
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

' loads the Item which embeds the element LibraryAdd
include('material-4/Av/LibraryAdd')

' renders the element
LibraryAdd('LibraryAdd', 'Library Add', 'an optional tech label')
@enduml
```

