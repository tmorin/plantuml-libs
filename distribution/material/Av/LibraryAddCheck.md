# LibraryAddCheck


```text
material/Av/LibraryAddCheck
```

```text
include('material/Av/LibraryAddCheck')
```



| Illustration | LibraryAddCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/LibraryAddCheck.png) | ![illustration for LibraryAddCheck](../../material/Av/LibraryAddCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibraryAddCheckXs>`
- `<$LibraryAddCheckSm>`
- `<$LibraryAddCheckMd>`
- `<$LibraryAddCheckLg>`





## LibraryAddCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LibraryAddCheck
include('material/Av/LibraryAddCheck')

' renders the element
LibraryAddCheck('LibraryAddCheck', 'Library Add Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LibraryAddCheck
include('material/Av/LibraryAddCheck')

' renders the element
LibraryAddCheck('LibraryAddCheck', 'Library Add Check', 'an optional tech label', 'an optional description')
@enduml
```

