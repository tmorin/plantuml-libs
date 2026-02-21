# Zod


```text
simpleicons-14/Z/Zod
```

```text
include('simpleicons-14/Z/Zod')
```



| Illustration | Zod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zod.png) | ![illustration for Zod](../../simpleicons-14/Z/Zod.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZodXs>`
- `<$ZodSm>`
- `<$ZodMd>`
- `<$ZodLg>`





## Zod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zod
include('simpleicons-14/Z/Zod')

' renders the element
Zod('Zod', 'Zod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zod
include('simpleicons-14/Z/Zod')

' renders the element
Zod('Zod', 'Zod', 'an optional tech label', 'an optional description')
@enduml
```

