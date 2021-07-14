# Etsy


```text
simpleicons-5/E/Etsy
```

```text
include('simpleicons-5/E/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Etsy.png) | ![illustration for Etsy](../../simpleicons-5/E/Etsy.Local.png) |




## Etsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-5/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-5/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label')
@enduml
```

