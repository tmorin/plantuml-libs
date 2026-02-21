# LeakAdd


```text
material/Image/LeakAdd
```

```text
include('material/Image/LeakAdd')
```



| Illustration | LeakAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/LeakAdd.png) | ![illustration for LeakAdd](../../material/Image/LeakAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeakAddXs>`
- `<$LeakAddSm>`
- `<$LeakAddMd>`
- `<$LeakAddLg>`





## LeakAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LeakAdd
include('material/Image/LeakAdd')

' renders the element
LeakAdd('LeakAdd', 'Leak Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LeakAdd
include('material/Image/LeakAdd')

' renders the element
LeakAdd('LeakAdd', 'Leak Add', 'an optional tech label', 'an optional description')
@enduml
```

