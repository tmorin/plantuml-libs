# Fizz


```text
simpleicons-14/F/Fizz
```

```text
include('simpleicons-14/F/Fizz')
```



| Illustration | Fizz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fizz.png) | ![illustration for Fizz](../../simpleicons-14/F/Fizz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FizzXs>`
- `<$FizzSm>`
- `<$FizzMd>`
- `<$FizzLg>`





## Fizz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fizz
include('simpleicons-14/F/Fizz')

' renders the element
Fizz('Fizz', 'Fizz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fizz
include('simpleicons-14/F/Fizz')

' renders the element
Fizz('Fizz', 'Fizz', 'an optional tech label', 'an optional description')
@enduml
```

