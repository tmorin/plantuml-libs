# Tampermonkey


```text
simpleicons-5/T/Tampermonkey
```

```text
include('simpleicons-5/T/Tampermonkey')
```



| Illustration | Tampermonkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tampermonkey.png) | ![illustration for Tampermonkey](../../simpleicons-5/T/Tampermonkey.Local.png) |




## Tampermonkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tampermonkey
include('simpleicons-5/T/Tampermonkey')

' renders the element
Tampermonkey('Tampermonkey', 'Tampermonkey', 'an optional tech label')
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

' loads the Item which embeds the element Tampermonkey
include('simpleicons-5/T/Tampermonkey')

' renders the element
Tampermonkey('Tampermonkey', 'Tampermonkey', 'an optional tech label')
@enduml
```

