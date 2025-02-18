# Amazonsqs


```text
simpleicons-14/A/Amazonsqs
```

```text
include('simpleicons-14/A/Amazonsqs')
```



| Illustration | Amazonsqs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Amazonsqs.png) | ![illustration for Amazonsqs](../../simpleicons-14/A/Amazonsqs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonsqsXs>`
- `<$AmazonsqsSm>`
- `<$AmazonsqsMd>`
- `<$AmazonsqsLg>`





## Amazonsqs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Amazonsqs
include('simpleicons-14/A/Amazonsqs')

' renders the element
Amazonsqs('Amazonsqs', 'Amazonsqs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amazonsqs
include('simpleicons-14/A/Amazonsqs')

' renders the element
Amazonsqs('Amazonsqs', 'Amazonsqs', 'an optional tech label', 'an optional description')
@enduml
```

