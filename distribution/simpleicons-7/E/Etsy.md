# Etsy


```text
simpleicons-7/E/Etsy
```

```text
include('simpleicons-7/E/Etsy')
```



| Illustration | Etsy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Etsy.png) | ![illustration for Etsy](../../simpleicons-7/E/Etsy.Local.png) |




## Etsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-7/E/Etsy')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Etsy
include('simpleicons-7/E/Etsy')

' renders the element
Etsy('Etsy', 'Etsy', 'an optional tech label')
@enduml
```

