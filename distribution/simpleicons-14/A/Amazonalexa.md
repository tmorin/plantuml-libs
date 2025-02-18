# Amazonalexa


```text
simpleicons-14/A/Amazonalexa
```

```text
include('simpleicons-14/A/Amazonalexa')
```



| Illustration | Amazonalexa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazonalexa.png) | ![illustration for Amazonalexa](../../simpleicons-14/A/Amazonalexa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonalexaXs>`
- `<$AmazonalexaSm>`
- `<$AmazonalexaMd>`
- `<$AmazonalexaLg>`





## Amazonalexa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonalexa
include('simpleicons-14/A/Amazonalexa')

' renders the element
Amazonalexa('Amazonalexa', 'Amazonalexa', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonalexa
include('simpleicons-14/A/Amazonalexa')

' renders the element
Amazonalexa('Amazonalexa', 'Amazonalexa', 'an optional tech label', 'an optional description')
@enduml
```

