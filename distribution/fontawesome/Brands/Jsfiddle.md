# Jsfiddle


```text
fontawesome/Brands/Jsfiddle
```

```text
include('fontawesome/Brands/Jsfiddle')
```



| Illustration | Jsfiddle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Jsfiddle.png) | ![illustration for Jsfiddle](../../fontawesome/Brands/Jsfiddle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JsfiddleXs>`
- `<$JsfiddleSm>`
- `<$JsfiddleMd>`
- `<$JsfiddleLg>`





## Jsfiddle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jsfiddle
include('fontawesome/Brands/Jsfiddle')

' renders the element
Jsfiddle('Jsfiddle', 'Jsfiddle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jsfiddle
include('fontawesome/Brands/Jsfiddle')

' renders the element
Jsfiddle('Jsfiddle', 'Jsfiddle', 'an optional tech label', 'an optional description')
@enduml
```

