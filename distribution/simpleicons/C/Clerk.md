# Clerk


```text
simpleicons/C/Clerk
```

```text
include('simpleicons/C/Clerk')
```



| Illustration | Clerk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Clerk.png) | ![illustration for Clerk](../../simpleicons/C/Clerk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClerkXs>`
- `<$ClerkSm>`
- `<$ClerkMd>`
- `<$ClerkLg>`





## Clerk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Clerk
include('simpleicons/C/Clerk')

' renders the element
Clerk('Clerk', 'Clerk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clerk
include('simpleicons/C/Clerk')

' renders the element
Clerk('Clerk', 'Clerk', 'an optional tech label', 'an optional description')
@enduml
```

