# SmileWink


```text
fontawesome/Solid/SmileWink
```

```text
include('fontawesome/Solid/SmileWink')
```



| Illustration | SmileWink |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SmileWink.png) | ![illustration for SmileWink](../../fontawesome/Solid/SmileWink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmileWinkXs>`
- `<$SmileWinkSm>`
- `<$SmileWinkMd>`
- `<$SmileWinkLg>`





## SmileWink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SmileWink
include('fontawesome/Solid/SmileWink')

' renders the element
SmileWink('SmileWink', 'Smile Wink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmileWink
include('fontawesome/Solid/SmileWink')

' renders the element
SmileWink('SmileWink', 'Smile Wink', 'an optional tech label', 'an optional description')
@enduml
```

