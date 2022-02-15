# WhiskeyGlass


```text
fontawesome-6/Solid/WhiskeyGlass
```

```text
include('fontawesome-6/Solid/WhiskeyGlass')
```



| Illustration | WhiskeyGlass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WhiskeyGlass.png) | ![illustration for WhiskeyGlass](../../fontawesome-6/Solid/WhiskeyGlass.Local.png) |




## WhiskeyGlass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WhiskeyGlass
include('fontawesome-6/Solid/WhiskeyGlass')

' renders the element
WhiskeyGlass('WhiskeyGlass', 'Whiskey Glass', 'an optional tech label')
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

' loads the Item which embeds the element WhiskeyGlass
include('fontawesome-6/Solid/WhiskeyGlass')

' renders the element
WhiskeyGlass('WhiskeyGlass', 'Whiskey Glass', 'an optional tech label')
@enduml
```

