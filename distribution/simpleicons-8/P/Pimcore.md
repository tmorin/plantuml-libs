# Pimcore


```text
simpleicons-8/P/Pimcore
```

```text
include('simpleicons-8/P/Pimcore')
```



| Illustration | Pimcore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pimcore.png) | ![illustration for Pimcore](../../simpleicons-8/P/Pimcore.Local.png) |




## Pimcore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pimcore
include('simpleicons-8/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pimcore
include('simpleicons-8/P/Pimcore')

' renders the element
Pimcore('Pimcore', 'Pimcore', 'an optional tech label', 'an optional description')
@enduml
```

