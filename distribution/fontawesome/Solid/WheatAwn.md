# WheatAwn


```text
fontawesome/Solid/WheatAwn
```

```text
include('fontawesome/Solid/WheatAwn')
```



| Illustration | WheatAwn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WheatAwn.png) | ![illustration for WheatAwn](../../fontawesome/Solid/WheatAwn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WheatAwnXs>`
- `<$WheatAwnSm>`
- `<$WheatAwnMd>`
- `<$WheatAwnLg>`





## WheatAwn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WheatAwn
include('fontawesome/Solid/WheatAwn')

' renders the element
WheatAwn('WheatAwn', 'Wheat Awn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WheatAwn
include('fontawesome/Solid/WheatAwn')

' renders the element
WheatAwn('WheatAwn', 'Wheat Awn', 'an optional tech label', 'an optional description')
@enduml
```

