# Prisma


```text
simpleicons-5/P/Prisma
```

```text
include('simpleicons-5/P/Prisma')
```



| Illustration | Prisma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Prisma.png) | ![illustration for Prisma](../../simpleicons-5/P/Prisma.Local.png) |




## Prisma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Prisma
include('simpleicons-5/P/Prisma')

' renders the element
Prisma('Prisma', 'Prisma', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Prisma
include('simpleicons-5/P/Prisma')

' renders the element
Prisma('Prisma', 'Prisma', 'an optional tech label')
@enduml
```

