# Composer


```text
simpleicons-7/C/Composer
```

```text
include('simpleicons-7/C/Composer')
```



| Illustration | Composer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Composer.png) | ![illustration for Composer](../../simpleicons-7/C/Composer.Local.png) |




## Composer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Composer
include('simpleicons-7/C/Composer')

' renders the element
Composer('Composer', 'Composer', 'an optional tech label')
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

' loads the Item which embeds the element Composer
include('simpleicons-7/C/Composer')

' renders the element
Composer('Composer', 'Composer', 'an optional tech label')
@enduml
```

