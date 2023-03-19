# PlugCircleXmark


```text
fontawesome-6/Solid/PlugCircleXmark
```

```text
include('fontawesome-6/Solid/PlugCircleXmark')
```



| Illustration | PlugCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlugCircleXmark.png) | ![illustration for PlugCircleXmark](../../fontawesome-6/Solid/PlugCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlugCircleXmarkXs>`
- `<$PlugCircleXmarkSm>`
- `<$PlugCircleXmarkMd>`
- `<$PlugCircleXmarkLg>`





## PlugCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleXmark
include('fontawesome-6/Solid/PlugCircleXmark')

' renders the element
PlugCircleXmark('PlugCircleXmark', 'Plug Circle Xmark', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleXmark
include('fontawesome-6/Solid/PlugCircleXmark')

' renders the element
PlugCircleXmark('PlugCircleXmark', 'Plug Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

