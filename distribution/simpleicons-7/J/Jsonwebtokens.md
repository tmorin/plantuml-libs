# Jsonwebtokens


```text
simpleicons-7/J/Jsonwebtokens
```

```text
include('simpleicons-7/J/Jsonwebtokens')
```



| Illustration | Jsonwebtokens |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/J/Jsonwebtokens.png) | ![illustration for Jsonwebtokens](../../simpleicons-7/J/Jsonwebtokens.Local.png) |




## Jsonwebtokens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Jsonwebtokens
include('simpleicons-7/J/Jsonwebtokens')

' renders the element
Jsonwebtokens('Jsonwebtokens', 'Jsonwebtokens', 'an optional tech label')
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

' loads the Item which embeds the element Jsonwebtokens
include('simpleicons-7/J/Jsonwebtokens')

' renders the element
Jsonwebtokens('Jsonwebtokens', 'Jsonwebtokens', 'an optional tech label')
@enduml
```

