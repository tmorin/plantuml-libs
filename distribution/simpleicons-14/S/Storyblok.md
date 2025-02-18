# Storyblok


```text
simpleicons-14/S/Storyblok
```

```text
include('simpleicons-14/S/Storyblok')
```



| Illustration | Storyblok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Storyblok.png) | ![illustration for Storyblok](../../simpleicons-14/S/Storyblok.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StoryblokXs>`
- `<$StoryblokSm>`
- `<$StoryblokMd>`
- `<$StoryblokLg>`





## Storyblok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Storyblok
include('simpleicons-14/S/Storyblok')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Storyblok
include('simpleicons-14/S/Storyblok')

' renders the element
Storyblok('Storyblok', 'Storyblok', 'an optional tech label', 'an optional description')
@enduml
```

