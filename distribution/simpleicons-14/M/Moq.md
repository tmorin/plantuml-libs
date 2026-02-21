# Moq


```text
simpleicons-14/M/Moq
```

```text
include('simpleicons-14/M/Moq')
```



| Illustration | Moq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Moq.png) | ![illustration for Moq](../../simpleicons-14/M/Moq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoqXs>`
- `<$MoqSm>`
- `<$MoqMd>`
- `<$MoqLg>`





## Moq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Moq
include('simpleicons-14/M/Moq')

' renders the element
Moq('Moq', 'Moq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moq
include('simpleicons-14/M/Moq')

' renders the element
Moq('Moq', 'Moq', 'an optional tech label', 'an optional description')
@enduml
```

