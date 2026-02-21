# Jsfiddle


```text
simpleicons/J/Jsfiddle
```

```text
include('simpleicons/J/Jsfiddle')
```



| Illustration | Jsfiddle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jsfiddle.png) | ![illustration for Jsfiddle](../../simpleicons/J/Jsfiddle.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jsfiddle
include('simpleicons/J/Jsfiddle')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jsfiddle
include('simpleicons/J/Jsfiddle')

' renders the element
Jsfiddle('Jsfiddle', 'Jsfiddle', 'an optional tech label', 'an optional description')
@enduml
```

