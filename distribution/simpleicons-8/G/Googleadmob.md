# Googleadmob


```text
simpleicons-8/G/Googleadmob
```

```text
include('simpleicons-8/G/Googleadmob')
```



| Illustration | Googleadmob |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleadmob.png) | ![illustration for Googleadmob](../../simpleicons-8/G/Googleadmob.Local.png) |




## Googleadmob

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleadmob
include('simpleicons-8/G/Googleadmob')

' renders the element
Googleadmob('Googleadmob', 'Googleadmob', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googleadmob
include('simpleicons-8/G/Googleadmob')

' renders the element
Googleadmob('Googleadmob', 'Googleadmob', 'an optional tech label', 'an optional description')
@enduml
```

