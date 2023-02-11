# Westerndigital


```text
simpleicons-8/W/Westerndigital
```

```text
include('simpleicons-8/W/Westerndigital')
```



| Illustration | Westerndigital |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Westerndigital.png) | ![illustration for Westerndigital](../../simpleicons-8/W/Westerndigital.Local.png) |




## Westerndigital

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Westerndigital
include('simpleicons-8/W/Westerndigital')

' renders the element
Westerndigital('Westerndigital', 'Westerndigital', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Westerndigital
include('simpleicons-8/W/Westerndigital')

' renders the element
Westerndigital('Westerndigital', 'Westerndigital', 'an optional tech label', 'an optional description')
@enduml
```

