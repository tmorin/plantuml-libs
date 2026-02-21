# Margin


```text
material/Editor/Margin
```

```text
include('material/Editor/Margin')
```



| Illustration | Margin |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Margin.png) | ![illustration for Margin](../../material/Editor/Margin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarginXs>`
- `<$MarginSm>`
- `<$MarginMd>`
- `<$MarginLg>`





## Margin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Margin
include('material/Editor/Margin')

' renders the element
Margin('Margin', 'Margin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Margin
include('material/Editor/Margin')

' renders the element
Margin('Margin', 'Margin', 'an optional tech label', 'an optional description')
@enduml
```

