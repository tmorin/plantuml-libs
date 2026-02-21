# Apachecloudstack


```text
simpleicons/A/Apachecloudstack
```

```text
include('simpleicons/A/Apachecloudstack')
```



| Illustration | Apachecloudstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachecloudstack.png) | ![illustration for Apachecloudstack](../../simpleicons/A/Apachecloudstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachecloudstackXs>`
- `<$ApachecloudstackSm>`
- `<$ApachecloudstackMd>`
- `<$ApachecloudstackLg>`





## Apachecloudstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachecloudstack
include('simpleicons/A/Apachecloudstack')

' renders the element
Apachecloudstack('Apachecloudstack', 'Apachecloudstack', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachecloudstack
include('simpleicons/A/Apachecloudstack')

' renders the element
Apachecloudstack('Apachecloudstack', 'Apachecloudstack', 'an optional tech label', 'an optional description')
@enduml
```

