# Eleventy


```text
simpleicons-6/E/Eleventy
```

```text
include('simpleicons-6/E/Eleventy')
```



| Illustration | Eleventy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Eleventy.png) | ![illustration for Eleventy](../../simpleicons-6/E/Eleventy.Local.png) |




## Eleventy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eleventy
include('simpleicons-6/E/Eleventy')

' renders the element
Eleventy('Eleventy', 'Eleventy', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eleventy
include('simpleicons-6/E/Eleventy')

' renders the element
Eleventy('Eleventy', 'Eleventy', 'an optional tech label')
@enduml
```

