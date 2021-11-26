# Pimcore


```text
simpleicons-5/P/Pimcore
```

```text
include('simpleicons-5/P/Pimcore')
```



| Illustration | Pimcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pimcore.png) | ![illustration for Pimcore](../../simpleicons-5/P/Pimcore.Local.png) |




## Pimcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pimcore
include('simpleicons-5/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label')
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

' loads the Item which embeds the element Pimcore
include('simpleicons-5/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label')
@enduml
```

