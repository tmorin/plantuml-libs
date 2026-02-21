# LibraryAdd


```text
material/Av/LibraryAdd
```

```text
include('material/Av/LibraryAdd')
```



| Illustration | LibraryAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/LibraryAdd.png) | ![illustration for LibraryAdd](../../material/Av/LibraryAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibraryAddXs>`
- `<$LibraryAddSm>`
- `<$LibraryAddMd>`
- `<$LibraryAddLg>`





## LibraryAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LibraryAdd
include('material/Av/LibraryAdd')

' renders the element
LibraryAdd('LibraryAdd', 'Library Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LibraryAdd
include('material/Av/LibraryAdd')

' renders the element
LibraryAdd('LibraryAdd', 'Library Add', 'an optional tech label', 'an optional description')
@enduml
```

