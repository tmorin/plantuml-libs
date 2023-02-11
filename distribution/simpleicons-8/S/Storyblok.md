# Storyblok


```text
simpleicons-8/S/Storyblok
```

```text
include('simpleicons-8/S/Storyblok')
```



| Illustration | Storyblok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Storyblok.png) | ![illustration for Storyblok](../../simpleicons-8/S/Storyblok.Local.png) |




## Storyblok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Storyblok
include('simpleicons-8/S/Storyblok')

' renders the element
Storyblok('Storyblok', 'Storyblok', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Storyblok
include('simpleicons-8/S/Storyblok')

' renders the element
Storyblok('Storyblok', 'Storyblok', 'an optional tech label', 'an optional description')
@enduml
```

