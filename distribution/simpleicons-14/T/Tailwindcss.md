# Tailwindcss


```text
simpleicons-14/T/Tailwindcss
```

```text
include('simpleicons-14/T/Tailwindcss')
```



| Illustration | Tailwindcss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tailwindcss.png) | ![illustration for Tailwindcss](../../simpleicons-14/T/Tailwindcss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TailwindcssXs>`
- `<$TailwindcssSm>`
- `<$TailwindcssMd>`
- `<$TailwindcssLg>`





## Tailwindcss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tailwindcss
include('simpleicons-14/T/Tailwindcss')

' renders the element
Tailwindcss('Tailwindcss', 'Tailwindcss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tailwindcss
include('simpleicons-14/T/Tailwindcss')

' renders the element
Tailwindcss('Tailwindcss', 'Tailwindcss', 'an optional tech label', 'an optional description')
@enduml
```

