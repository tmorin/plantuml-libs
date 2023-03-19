# Apachepulsar


```text
simpleicons-8/A/Apachepulsar
```

```text
include('simpleicons-8/A/Apachepulsar')
```



| Illustration | Apachepulsar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apachepulsar.png) | ![illustration for Apachepulsar](../../simpleicons-8/A/Apachepulsar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachepulsarXs>`
- `<$ApachepulsarSm>`
- `<$ApachepulsarMd>`
- `<$ApachepulsarLg>`





## Apachepulsar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachepulsar
include('simpleicons-8/A/Apachepulsar')

' renders the element
Apachepulsar('Apachepulsar', 'Apachepulsar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachepulsar
include('simpleicons-8/A/Apachepulsar')

' renders the element
Apachepulsar('Apachepulsar', 'Apachepulsar', 'an optional tech label', 'an optional description')
@enduml
```

