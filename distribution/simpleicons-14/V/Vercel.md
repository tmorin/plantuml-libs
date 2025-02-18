# Vercel


```text
simpleicons-14/V/Vercel
```

```text
include('simpleicons-14/V/Vercel')
```



| Illustration | Vercel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vercel.png) | ![illustration for Vercel](../../simpleicons-14/V/Vercel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VercelXs>`
- `<$VercelSm>`
- `<$VercelMd>`
- `<$VercelLg>`





## Vercel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vercel
include('simpleicons-14/V/Vercel')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vercel
include('simpleicons-14/V/Vercel')

' renders the element
Vercel('Vercel', 'Vercel', 'an optional tech label', 'an optional description')
@enduml
```

