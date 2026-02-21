# Lighthouse


```text
simpleicons/L/Lighthouse
```

```text
include('simpleicons/L/Lighthouse')
```



| Illustration | Lighthouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lighthouse.png) | ![illustration for Lighthouse](../../simpleicons/L/Lighthouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LighthouseXs>`
- `<$LighthouseSm>`
- `<$LighthouseMd>`
- `<$LighthouseLg>`





## Lighthouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lighthouse
include('simpleicons/L/Lighthouse')

' renders the element
Lighthouse('Lighthouse', 'Lighthouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lighthouse
include('simpleicons/L/Lighthouse')

' renders the element
Lighthouse('Lighthouse', 'Lighthouse', 'an optional tech label', 'an optional description')
@enduml
```

