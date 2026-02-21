# Eleventy


```text
simpleicons/E/Eleventy
```

```text
include('simpleicons/E/Eleventy')
```



| Illustration | Eleventy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Eleventy.png) | ![illustration for Eleventy](../../simpleicons/E/Eleventy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EleventyXs>`
- `<$EleventySm>`
- `<$EleventyMd>`
- `<$EleventyLg>`





## Eleventy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Eleventy
include('simpleicons/E/Eleventy')

' renders the element
Eleventy('Eleventy', 'Eleventy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eleventy
include('simpleicons/E/Eleventy')

' renders the element
Eleventy('Eleventy', 'Eleventy', 'an optional tech label', 'an optional description')
@enduml
```

