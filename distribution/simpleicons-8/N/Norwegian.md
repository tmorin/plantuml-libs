# Norwegian


```text
simpleicons-8/N/Norwegian
```

```text
include('simpleicons-8/N/Norwegian')
```



| Illustration | Norwegian |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Norwegian.png) | ![illustration for Norwegian](../../simpleicons-8/N/Norwegian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NorwegianXs>`
- `<$NorwegianSm>`
- `<$NorwegianMd>`
- `<$NorwegianLg>`





## Norwegian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Norwegian
include('simpleicons-8/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Norwegian
include('simpleicons-8/N/Norwegian')

' renders the element
Norwegian('Norwegian', 'Norwegian', 'an optional tech label', 'an optional description')
@enduml
```

