# Adjust


```text
material/Image/Adjust
```

```text
include('material/Image/Adjust')
```



| Illustration | Adjust |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Adjust.png) | ![illustration for Adjust](../../material/Image/Adjust.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdjustXs>`
- `<$AdjustSm>`
- `<$AdjustMd>`
- `<$AdjustLg>`





## Adjust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Adjust
include('material/Image/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adjust
include('material/Image/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label', 'an optional description')
@enduml
```

