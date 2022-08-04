# Vercel


```text
simpleicons-7/V/Vercel
```

```text
include('simpleicons-7/V/Vercel')
```



| Illustration | Vercel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vercel.png) | ![illustration for Vercel](../../simpleicons-7/V/Vercel.Local.png) |




## Vercel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vercel
include('simpleicons-7/V/Vercel')

' renders the element
Vercel('Vercel', 'Vercel', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vercel
include('simpleicons-7/V/Vercel')

' renders the element
Vercel('Vercel', 'Vercel', 'an optional tech label', 'an optional description')
@enduml
```

