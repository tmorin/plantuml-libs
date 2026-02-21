# Padding


```text
material/Editor/Padding
```

```text
include('material/Editor/Padding')
```



| Illustration | Padding |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Padding.png) | ![illustration for Padding](../../material/Editor/Padding.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaddingXs>`
- `<$PaddingSm>`
- `<$PaddingMd>`
- `<$PaddingLg>`





## Padding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Padding
include('material/Editor/Padding')

' renders the element
Padding('Padding', 'Padding', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Padding
include('material/Editor/Padding')

' renders the element
Padding('Padding', 'Padding', 'an optional tech label', 'an optional description')
@enduml
```

