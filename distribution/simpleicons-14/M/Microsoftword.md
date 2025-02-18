# Microsoftword


```text
simpleicons-14/M/Microsoftword
```

```text
include('simpleicons-14/M/Microsoftword')
```



| Illustration | Microsoftword |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microsoftword.png) | ![illustration for Microsoftword](../../simpleicons-14/M/Microsoftword.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrosoftwordXs>`
- `<$MicrosoftwordSm>`
- `<$MicrosoftwordMd>`
- `<$MicrosoftwordLg>`





## Microsoftword

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microsoftword
include('simpleicons-14/M/Microsoftword')

' renders the element
Microsoftword('Microsoftword', 'Microsoftword', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftword
include('simpleicons-14/M/Microsoftword')

' renders the element
Microsoftword('Microsoftword', 'Microsoftword', 'an optional tech label', 'an optional description')
@enduml
```

