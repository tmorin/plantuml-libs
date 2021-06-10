# GlassWhiskey


```text
fontawesome-5/Solid/GlassWhiskey
```

```text
include('fontawesome-5/Solid/GlassWhiskey')
```



| Illustration | GlassWhiskey |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GlassWhiskey.png) | ![illustration for GlassWhiskey](../../fontawesome-5/Solid/GlassWhiskey.Local.png) |




## GlassWhiskey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassWhiskey
include('fontawesome-5/Solid/GlassWhiskey')

' renders the element
GlassWhiskey('GlassWhiskey', 'Glass Whiskey', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GlassWhiskey
include('fontawesome-5/Solid/GlassWhiskey')

' renders the element
GlassWhiskey('GlassWhiskey', 'Glass Whiskey', 'an optional tech label')
@enduml
```

