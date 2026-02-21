# AmpStories


```text
material/Content/AmpStories
```

```text
include('material/Content/AmpStories')
```



| Illustration | AmpStories |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/AmpStories.png) | ![illustration for AmpStories](../../material/Content/AmpStories.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmpStoriesXs>`
- `<$AmpStoriesSm>`
- `<$AmpStoriesMd>`
- `<$AmpStoriesLg>`





## AmpStories

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AmpStories
include('material/Content/AmpStories')

' renders the element
AmpStories('AmpStories', 'Amp Stories', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmpStories
include('material/Content/AmpStories')

' renders the element
AmpStories('AmpStories', 'Amp Stories', 'an optional tech label', 'an optional description')
@enduml
```

