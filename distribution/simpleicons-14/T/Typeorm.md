# Typeorm


```text
simpleicons-14/T/Typeorm
```

```text
include('simpleicons-14/T/Typeorm')
```



| Illustration | Typeorm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Typeorm.png) | ![illustration for Typeorm](../../simpleicons-14/T/Typeorm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TypeormXs>`
- `<$TypeormSm>`
- `<$TypeormMd>`
- `<$TypeormLg>`





## Typeorm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Typeorm
include('simpleicons-14/T/Typeorm')

' renders the element
Typeorm('Typeorm', 'Typeorm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Typeorm
include('simpleicons-14/T/Typeorm')

' renders the element
Typeorm('Typeorm', 'Typeorm', 'an optional tech label', 'an optional description')
@enduml
```

