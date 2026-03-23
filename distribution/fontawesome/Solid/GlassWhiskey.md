# GlassWhiskey


```text
fontawesome/Solid/GlassWhiskey
```

```text
include('fontawesome/Solid/GlassWhiskey')
```



| Illustration | GlassWhiskey |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GlassWhiskey.png) | ![illustration for GlassWhiskey](../../fontawesome/Solid/GlassWhiskey.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlassWhiskeyXs>`
- `<$GlassWhiskeySm>`
- `<$GlassWhiskeyMd>`
- `<$GlassWhiskeyLg>`





## GlassWhiskey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GlassWhiskey
include('fontawesome/Solid/GlassWhiskey')

' renders the element
GlassWhiskey('GlassWhiskey', 'Glass Whiskey', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GlassWhiskey
include('fontawesome/Solid/GlassWhiskey')

' renders the element
GlassWhiskey('GlassWhiskey', 'Glass Whiskey', 'an optional tech label', 'an optional description')
@enduml
```

